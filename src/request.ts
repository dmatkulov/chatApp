export const request = async <ResponseType>(url: string, init?: RequestInit): Promise<ResponseType> => {
  const response = await fetch(url, init);
  
  if (response.ok) {
    return response.json();
  }
  throw new Error('Network error: ' + response.status);
};