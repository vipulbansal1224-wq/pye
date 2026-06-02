'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [viewingProduct, setViewingProduct] = useState<any | null>(null);
  const [isLocalhost, setIsLocalhost] = useState(true);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLocalhost(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean)));

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setUploading(true);
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        const currentImages = Array.isArray(editingProduct.images) 
          ? editingProduct.images 
          : (editingProduct.images || '').split(',').map((s:string) => s.trim()).filter(Boolean);
        
        setEditingProduct({
          ...editingProduct,
          images: [...currentImages, data.url].join(', ')
        });
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch (err) {
      alert('Upload error');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`/api/products?slug=${slug}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProducts();
      } else {
        alert('Failed to delete product');
      }
    } catch (err) {
      alert('Error deleting product');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct.slug || !editingProduct.title) return alert('Title and Slug are required');
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...editingProduct,
          images: Array.isArray(editingProduct.images) ? editingProduct.images : (editingProduct.images || '').split(',').map((s:string) => s.trim())
        })
      });
      if (res.ok) {
        setEditingProduct(null);
        fetchProducts();
      } else {
        alert('Failed to save product');
      }
    } catch (err) {
      alert('Error saving product');
    }
  };

  return (
    <div className="container section-padding">
      {!isLocalhost && (
        <div style={{ background: '#fee2e2', color: '#991b1b', border: '1px solid #f87171', padding: '16px', borderRadius: '8px', marginBottom: '24px', fontWeight: 600 }}>
          ⚠️ WARNING: You are using the live Netlify Admin Panel. Any images uploaded or products added here will be TEMPORARY and will disappear on the next website update. To save permanently, please run the website locally on your computer.
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1>Admin Dashboard</h1>
        <button 
          className="contact-btn"
          onClick={() => setEditingProduct({ id: Date.now().toString(), title: '', slug: '', category: '', description: '', images: '' })}
        >
          + Add New Product
        </button>
      </div>

      {editingProduct && (
        <div className="modal-overlay">
          <div className="modal-content glass-card" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <button className="modal-close" onClick={() => setEditingProduct(null)}>&times;</button>
            <h2 style={{ marginBottom: '24px' }}>{editingProduct.id.length > 10 ? 'Add Product' : 'Edit Product'}</h2>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label className="form-label">Title</label>
                <input className="form-control" value={editingProduct.title} onChange={e => setEditingProduct({...editingProduct, title: e.target.value})} required />
              </div>
              <div className="form-group">
                <label className="form-label">Slug (unique)</label>
                <input className="form-control" value={editingProduct.slug} onChange={e => setEditingProduct({...editingProduct, slug: e.target.value})} required />
              </div>
              <div className="form-group">
                <label className="form-label">Category (Select or Type New)</label>
                <input 
                  className="form-control" 
                  list="categories-list"
                  value={editingProduct.category} 
                  onChange={e => setEditingProduct({...editingProduct, category: e.target.value})} 
                  placeholder="e.g. pliers"
                />
                <datalist id="categories-list">
                  {categories.map(cat => <option key={cat as string} value={cat as string} />)}
                </datalist>
              </div>
              <div className="form-group">
                <label className="form-label">Description (Line by Line)</label>
                <textarea className="form-control" rows={6} value={editingProduct.description} onChange={e => setEditingProduct({...editingProduct, description: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Images (comma separated URLs)</label>
                <input className="form-control" value={Array.isArray(editingProduct.images) ? editingProduct.images.join(', ') : editingProduct.images} onChange={e => setEditingProduct({...editingProduct, images: e.target.value})} />
                
                <div style={{ marginTop: '12px', padding: '12px', border: '1px dashed var(--border)', borderRadius: '8px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Upload Image from Computer</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
                  {uploading && <span style={{ marginLeft: '12px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 'bold' }}>Uploading...</span>}
                </div>
              </div>
              <button type="submit" className="contact-btn" style={{ width: '100%', marginTop: '16px' }}>Save Product</button>
            </form>
          </div>
        </div>
      )}

      <div className="glass-card" style={{ padding: '24px', overflowX: 'auto' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '12px' }}>Image</th>
              <th style={{ padding: '12px' }}>Title</th>
              <th style={{ padding: '12px' }}>Category</th>
              <th style={{ padding: '12px' }}>Slug</th>
              <th style={{ padding: '12px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.slug} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px' }}>
                  {p.images && p.images[0] && <img src={p.images[0]} alt={p.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />}
                </td>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{p.title}</td>
                <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{p.category}</td>
                <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{p.slug}</td>
                <td style={{ padding: '12px' }}>
                  <button onClick={() => setViewingProduct(p)} style={{ color: '#10b981', marginRight: '16px', fontWeight: 'bold' }}>View</button>
                  <button onClick={() => setEditingProduct(p)} style={{ color: 'var(--primary)', marginRight: '16px', fontWeight: 'bold' }}>Edit</button>
                  <button onClick={() => handleDelete(p.slug)} style={{ color: '#ef4444', fontWeight: 'bold' }}>Delete</button>
                </td>
              </tr>
            ))}
            {products.length === 0 && <tr><td colSpan={5} style={{ padding: '24px', textAlign: 'center' }}>No products found.</td></tr>}
          </tbody>
        </table>
      </div>

      {viewingProduct && (
        <div className="modal-overlay">
          <div className="modal-content glass-card" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <button className="modal-close" onClick={() => setViewingProduct(null)}>&times;</button>
            <h2 style={{ marginBottom: '16px' }}>Product Preview</h2>
            <div style={{ marginBottom: '24px' }}>
              {viewingProduct.images && viewingProduct.images[0] && (
                <img src={viewingProduct.images[0]} alt={viewingProduct.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px', marginBottom: '16px' }} />
              )}
              <h3>{viewingProduct.title}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '8px' }}>Category: {viewingProduct.category}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Slug: {viewingProduct.slug}</p>
              <div style={{ whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.03)', padding: '16px', borderRadius: '8px' }}>
                {viewingProduct.description}
              </div>
            </div>
            <button 
              className="contact-btn" 
              style={{ width: '100%' }}
              onClick={() => {
                setEditingProduct(viewingProduct);
                setViewingProduct(null);
              }}
            >
              Edit this Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
