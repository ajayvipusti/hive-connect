import { InterceptorService } from './interceptor.service';
import { ExceptionService } from './exception.service';

const accessToken: any = localStorage.getItem('accessToken');

export class ApiService {
  private interceptor = new InterceptorService();
  private exceptionHandler = new ExceptionService();

  async fetchData(url: string) {
    try {
      const modifiedRequest = this.interceptor.intercept({
        method: 'GET',
        headers: {},
      });
      const response = await fetch(url, modifiedRequest);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      this.exceptionHandler.handle(error as Error);
    }
  }

  async PostData(url: string, requestBody: Record<string, any>) {
    try {
      const modifiedRequest = this.interceptor.intercept({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestBody),
      });
      const response = await fetch(url, modifiedRequest);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      this.exceptionHandler.handle(error as Error);
    }
  }
}
