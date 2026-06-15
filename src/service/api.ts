export class APIService<T> {
  constructor() {}

  async get(endpoint: string): Promise<T> {
    const res = await fetch(endpoint);

    await this.validateResponse(res);

    return await res.json();
  }

  async post(endpoint: string, body: {}): Promise<T> {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(endpoint, options);

    await this.validateResponse(res);

    return await res.json();
  }

  async put(endpoint: string, body: {}): Promise<T> {
    const options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const res = await fetch(endpoint, options);

    await this.validateResponse(res);

    return await res.json();
  }

  async delete(endpoint: string): Promise<T> {
    const options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    };

    const res = await fetch(endpoint, options);

    await this.validateResponse(res);

    return await res.json();
  }

  private async validateResponse(response: Response) {
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }
  }
}
