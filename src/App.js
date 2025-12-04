import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:8080/api/items";

function initialForm() {
  return {
    productName: "",
    category: "",
    purchaseDate: "",
    warrantyMonths: 12,
    storeName: "",
    invoiceNumber: "",
    notes: "",
  };
}

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm());
  const [editingId, setEditingId] = useState(null);

  const loadItems = async () => {
    try {
      const res = await axios.get(API_URL);
      setItems(res.data);
    } catch (err) {
      console.error("Error loading items:", err);
      alert("Error loading items. Check if backend is running.");
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      warrantyMonths: Number(form.warrantyMonths),
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }
      setForm(initialForm());
      setEditingId(null);
      await loadItems();
    } catch (err) {
      console.error("Error saving item:", err);
      alert("Error saving item. Check console/logs.");
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      productName: item.productName || "",
      category: item.category || "",
      purchaseDate: item.purchaseDate || "",
      warrantyMonths: item.warrantyMonths || 12,
      storeName: item.storeName || "",
      invoiceNumber: item.invoiceNumber || "",
      notes: item.notes || "",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      await loadItems();
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Error deleting item.");
    }
  };

  const getWarrantyStatus = (item) => {
    if (!item.purchaseDate || !item.warrantyMonths) {
      return { label: "Unknown", className: "badge" };
    }

    const purchase = new Date(item.purchaseDate);
    const expiry = new Date(purchase);
    expiry.setMonth(expiry.getMonth() + item.warrantyMonths);

    const now = new Date();
    const diffMs = expiry - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return {
        label: `Expired ${Math.abs(diffDays)} days ago`,
        className: "badge badge-red",
      };
    }
    if (diffDays <= 60) {
      return {
        label: `${diffDays} days left`,
        className: "badge badge-orange",
      };
    }
    return {
      label: `${diffDays} days left`,
      className: "badge badge-green",
    };
  };

  return (
    <div className="app">
      <h1>Warranty &amp; Purchase Tracker</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Product Name</label>
          <input
            name="productName"
            value={form.productName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Purchase Date</label>
          <input
            type="date"
            name="purchaseDate"
            value={form.purchaseDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Warranty (months)</label>
          <input
            type="number"
            name="warrantyMonths"
            value={form.warrantyMonths}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div className="form-row">
          <label>Store Name</label>
          <input
            name="storeName"
            value={form.storeName}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Invoice Number</label>
          <input
            name="invoiceNumber"
            value={form.invoiceNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit">
            {editingId ? "Update Item" : "Add Item"}
          </button>
          {editingId && (
            <button
              type="button"
              className="secondary"
              onClick={() => {
                setForm(initialForm());
                setEditingId(null);
              }}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      <div className="list">
        {items.length === 0 && <p>No items yet.</p>}
        {items.map((item) => {
          const status = getWarrantyStatus(item);
          return (
            <div key={item.id} className="card">
              <div className="card-header">
                <h3>{item.productName}</h3>
                <span className={status.className}>{status.label}</span>
              </div>
              <p>
                <strong>Category:</strong> {item.category || "-"}
              </p>
              <p>
                <strong>Purchase Date:</strong> {item.purchaseDate}
              </p>
              <p>
                <strong>Warranty:</strong> {item.warrantyMonths} months
              </p>
              <p>
                <strong>Store:</strong> {item.storeName || "-"}
              </p>
              <p>
                <strong>Invoice:</strong> {item.invoiceNumber || "-"}
              </p>
              {item.notes && (
                <p>
                  <strong>Notes:</strong> {item.notes}
                </p>
              )}

              <div className="card-actions">
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button
                  className="danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
