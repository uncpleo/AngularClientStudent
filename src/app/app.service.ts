import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${API_BASE}/estudiantes`);
  }

  create(estudiante: any) {
    return this.http.post(`${API_BASE}/estudiantes`, estudiante);
  }

  update(id: string, estudiante: any) {
    return this.http.put(`${API_BASE}/estudiantes/${id}`, estudiante);
  }

  delete(id: string) {
    return this.http.delete(`${API_BASE}/estudiantes/${id}`);
  }
}

