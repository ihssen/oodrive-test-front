import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ItemsService {

  private apiUrl = 'http://localhost:8080/api/items';

	private currentItemId = new BehaviorSubject<string>('');
	private path = new BehaviorSubject<string>('');

	constructor(private http: HttpClient) { }

	public setCurrentItemID(id: string) {
		this.currentItemId.next(id);
	}

	public getCurrentItemID() {
		return this.currentItemId.asObservable();
	}

	public setPath(segment: string) {
	  this.path.next(this.path.value + '/' + segment);
	}

	public getPath() {
		return this.path.asObservable();
	}

	public getItems() {
		return this.http.get(this.apiUrl);
	}

	public getChildItems(id: string) {
	  const data = { parentId: id };
	  return this.http.get(this.apiUrl, { params: data } );
	}

	public getItemPath(id: string) {
	  return this.http.get(`${this.apiUrl}/${id}/path`);
	}

	public createFolder(name: string) {
		return this.http.post(this.apiUrl, { name, folder: true }, { params: { parentId: this.currentItemId.value } });
	}

	public downloadFile(id: string) {
		return this.http.get(`${this.apiUrl}/${id}/`, { responseType: 'blob' as 'json' }).pipe(
      map((blobPart: BlobPart) => {
        const blob = new Blob([blobPart], { type: 'text/plain' });
        const linkElement = document.createElement('a');
        linkElement.href = window.URL.createObjectURL(blob);
        linkElement.download = `${new Date().getTime()}.txt`;
        linkElement.click();
        document.body.removeChild(linkElement);
      }),
    ).subscribe();
	}

	public uploadFile(file: File) {
		const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

		return this.http.post(this.apiUrl, formData, { params: { parentId: this.currentItemId.value } });
	}

}
