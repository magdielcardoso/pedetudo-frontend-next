import axios from "axios"

export default async function TenantFetch () {
    const response = await axios.get('http://api.pedetudo.online:8181/users')
    const nomeTenant = response.data[0].nome_negocio
    const nomeSessionTenant = nomeTenant.replace(/\s+/g, '');
    const logoPath = response.data[0].logo_path

    return {nomeTenant, logoPath, nomeSessionTenant}
}