// =============================================================================
// Company-wise LeetCode Problem Parser
// Reads CSV data from addi/leetcode-company-wise-problems-2022-main/companies/
// =============================================================================

export interface CompanyProblem {
  link: string;
  name: string;
  frequency: number;
}

export interface CompanyData {
  slug: string;
  name: string;
  problemCount: number;
  problems: CompanyProblem[];
}

// ─── Top Companies (manually curated from the CSVs we have) ─────────
// We embed the top ~40 companies directly for static rendering.
// Each entry: [display name, csv filename stem]
const TOP_COMPANIES: [string, string][] = [
  ['Google', 'Google'],
  ['Amazon', 'Amazon'],
  ['Meta (Facebook)', 'Facebook'],
  ['Microsoft', 'Microsoft'],
  ['Apple', 'Apple'],
  ['Bloomberg', 'Bloomberg'],
  ['Adobe', 'Adobe'],
  ['Uber', 'Uber'],
  ['Goldman Sachs', 'Goldman Sachs'],
  ['LinkedIn', 'LinkedIn'],
  ['Oracle', 'Oracle'],
  ['Salesforce', 'Salesforce'],
  ['ByteDance', 'ByteDance'],
  ['TikTok', 'tiktok'],
  ['Snapchat', 'Snapchat'],
  ['Twitter', 'Twitter'],
  ['Netflix', 'Netflix'],
  ['Nvidia', 'Nvidia'],
  ['Cisco', 'Cisco'],
  ['VMware', 'VMware'],
  ['Walmart', 'Walmart Global Tech'],
  ['Spotify', 'Spotify'],
  ['DoorDash', 'DoorDash'],
  ['Intuit', 'Intuit'],
  ['Yahoo', 'Yahoo'],
  ['Flipkart', 'Flipkart'],
  ['Expedia', 'Expedia'],
  ['PayPal', 'Paypal'],
  ['Visa', 'Visa'],
  ['Samsung', 'Samsung'],
  ['Tesla', 'Tesla'],
  ['Lyft', 'Lyft'],
  ['Robinhood', 'Robinhood'],
  ['JPMorgan', 'JPMorgan'],
  ['Morgan Stanley', 'Morgan Stanley'],
  ['Infosys', 'Infosys'],
  ['TCS', 'tcs'],
  ['Zoho', 'Zoho'],
  ['Swiggy', 'Swiggy'],
  ['Airbnb', 'Airbnb'],
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ─── Parse a single CSV string ──────────────────────────────────────
function parseCSV(csvContent: string): CompanyProblem[] {
  const lines = csvContent.trim().split('\n');
  if (lines.length <= 1) return [];

  // skip header: problem_link,problem_name,num_occur
  return lines.slice(1).map(line => {
    // CSV may have commas in names, so split carefully
    const firstComma = line.indexOf(',');
    const lastComma = line.lastIndexOf(',');
    if (firstComma === -1 || lastComma === firstComma) return null;

    const link = line.substring(0, firstComma).trim();
    const name = line.substring(firstComma + 1, lastComma).trim();
    const freq = parseInt(line.substring(lastComma + 1).trim(), 10) || 1;

    return { link, name, frequency: freq };
  }).filter(Boolean) as CompanyProblem[];
}

// ─── Static Company Data (for build-time) ───────────────────────────
// In a Next.js static export, we can't read the file system at runtime.
// So we export a helper for use in getStaticProps / server components,
// and also export a curated summary for client-side rendering.

export function getCompanyList(): { slug: string; name: string; icon: string }[] {
  return TOP_COMPANIES.map(([name]) => ({
    slug: slugify(name),
    name,
    icon: getCompanyIcon(name),
  }));
}

function getCompanyIcon(name: string): string {
  const icons: Record<string, string> = {
    'Google': '🔍',
    'Amazon': '📦',
    'Meta (Facebook)': '👤',
    'Microsoft': '🪟',
    'Apple': '🍎',
    'Bloomberg': '📊',
    'Adobe': '🎨',
    'Uber': '🚗',
    'Goldman Sachs': '🏦',
    'LinkedIn': '💼',
    'Oracle': '🗄️',
    'Salesforce': '☁️',
    'ByteDance': '🎵',
    'TikTok': '📱',
    'Snapchat': '👻',
    'Twitter': '🐦',
    'Netflix': '🎬',
    'Nvidia': '🖥️',
    'Cisco': '🌐',
    'VMware': '💻',
    'Walmart': '🛒',
    'Spotify': '🎧',
    'DoorDash': '🍕',
    'Intuit': '📝',
    'Yahoo': '📧',
    'Flipkart': '🛍️',
    'Expedia': '✈️',
    'PayPal': '💳',
    'Visa': '💳',
    'Samsung': '📺',
    'Tesla': '⚡',
    'Lyft': '🚕',
    'Robinhood': '📈',
    'JPMorgan': '🏛️',
    'Morgan Stanley': '🏛️',
    'Infosys': '💻',
    'TCS': '💻',
    'Zoho': '📋',
    'Swiggy': '🍔',
    'Airbnb': '🏠',
  };
  return icons[name] || '🏢';
}


