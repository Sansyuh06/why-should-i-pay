import { getCompanyData, getAllCompanySlugs } from '@/lib/parseCompanies.server';
import { getCompanyList } from '@/lib/parseCompanies';
import { CompanyDetailClient } from './CompanyDetailClient';

// Generate static params for all companies
export async function generateStaticParams() {
    return getAllCompanySlugs().map(slug => ({ company: slug }));
}

export default async function CompanyPage({ params }: { params: Promise<{ company: string }> }) {
    const { company } = await params;
    const data = await getCompanyData(company);
    const companies = getCompanyList();

    return <CompanyDetailClient data={data} companies={companies} slug={company} />;
}
