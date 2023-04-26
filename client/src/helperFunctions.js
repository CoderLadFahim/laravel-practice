const baseUrl = 'http://127.0.0.1:8000';
export async function getTodos() {
    const response = await fetch(`${baseUrl}/api/todos`)
    const data = await response.json();
    return data;
}
