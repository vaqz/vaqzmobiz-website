const vmProducts = [
  { brand: "Apple Cases", name: "Clear Case — iPhone 11 family", category: "cases" },
  { brand: "Apple Cases", name: "Clear Case — iPhone 12 family", category: "cases" },
  { brand: "Apple Cases", name: "Clear Case — iPhone 13 family", category: "cases" },
  { brand: "Apple Cases", name: "Clear Case — iPhone 14 family", category: "cases" },
  { brand: "Apple Cases", name: "Clear Case — iPhone 15 family", category: "cases" },
  { brand: "Apple Cases", name: "Clear Case — iPhone 16 family", category: "cases" },
  { brand: "Apple Cases", name: "Case — iPhone 17 family (exact model required)", category: "cases" },
  { brand: "Apple Cases", name: "Silicone Case — supported iPhone models", category: "cases" },
  { brand: "Apple Cases", name: "Shockproof Case — supported iPhone models", category: "cases" },
  { brand: "Apple Cases", name: "MagSafe-compatible Case — supported iPhone models", category: "cases" },
  { brand: "Apple Protection", name: "Tempered Glass — supported iPhone models", category: "protection" },
  { brand: "Apple Protection", name: "Privacy Screen Protector — supported iPhone models", category: "protection" },
  { brand: "Apple Protection", name: "Camera Lens Protector — supported iPhone models", category: "protection" },
  { brand: "Apple Accessories", name: "AirPods Protective Case — generation required", category: "audio" },
  { brand: "Apple Charging", name: "USB-C Charging Cable", category: "charging" },
  { brand: "Apple Charging", name: "USB-C Power Adapter", category: "charging" },
  { brand: "Samsung", name: "Galaxy A-series Case — exact model required", category: "cases" },
  { brand: "Samsung", name: "Galaxy S-series Case — exact model required", category: "cases" },
  { brand: "Samsung", name: "Tempered Glass — supported Galaxy models", category: "protection" },
  { brand: "Samsung", name: "Camera Lens Protector — supported Galaxy models", category: "protection" },
  { brand: "Xiaomi / Redmi", name: "Case — exact model required", category: "cases" },
  { brand: "Xiaomi / Redmi", name: "Tempered Glass — exact model required", category: "protection" },
  { brand: "OPPO", name: "Case — exact model required", category: "cases" },
  { brand: "OPPO", name: "Tempered Glass — exact model required", category: "protection" },
  { brand: "vivo", name: "Case — exact model required", category: "cases" },
  { brand: "vivo", name: "Tempered Glass — exact model required", category: "protection" },
  { brand: "realme", name: "Case — exact model required", category: "cases" },
  { brand: "realme", name: "Tempered Glass — exact model required", category: "protection" },
  { brand: "Universal", name: "USB-C Cable — specs to be confirmed", category: "charging" },
  { brand: "Universal", name: "Lightning-compatible Cable — specs to be confirmed", category: "charging" },
  { brand: "Universal", name: "Wall Charger — output/specification to be confirmed", category: "charging" },
  { brand: "Universal", name: "Power Bank — capacity and ports to be confirmed", category: "power" },
  { brand: "Universal", name: "Wired Earphones — connector required", category: "audio" },
  { brand: "Universal", name: "Wireless Earbuds — model/specs to be confirmed", category: "audio" },
  { brand: "Universal", name: "Car Phone Mount", category: "mounts" },
  { brand: "Universal", name: "Adjustable Desk Phone Stand", category: "mounts" },
  { brand: "Universal", name: "Phone Grip / Ring Holder", category: "mounts" },
  { brand: "Universal", name: "OTG Adapter — connector required", category: "connectivity" },
  { brand: "Universal", name: "Memory Card Reader — connector required", category: "connectivity" },
  { brand: "Universal", name: "Phone Cleaning Kit", category: "care" },
];
const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('product-search');
const categoryInput = document.getElementById('product-filter');
const countLabel = document.getElementById('product-count');
function renderVmProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryInput.value;
  const filtered = vmProducts.filter(p => (category === 'all' || p.category === category) && (p.name + ' ' + p.brand).toLowerCase().includes(query));
  grid.innerHTML = filtered.map(p => `<article class="product-card"><div class="product-art" aria-hidden="true"><svg viewBox="0 0 80 80" fill="none"><rect x="23" y="7" width="34" height="66" rx="8" stroke="currentColor" stroke-width="3"/><rect x="29" y="14" width="12" height="12" rx="3" stroke="currentColor" stroke-width="2"/><path d="M36 64h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="product-info"><p class="product-type">${p.brand}</p><h3>${p.name}</h3><p>Exact compatibility, current availability, and final price must be confirmed with the store before ordering.</p><div class="product-price">Price: confirm with store</div><span class="availability-label">Availability not yet verified</span></div></article>`).join('');
  countLabel.textContent = `${filtered.length} of ${vmProducts.length} planned listings shown`;
}
searchInput.addEventListener('input', renderVmProducts);
categoryInput.addEventListener('change', renderVmProducts);
renderVmProducts();
