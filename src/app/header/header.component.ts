import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService) {}

    public onSaveData() {
        this.dataStorageService.storeMovies()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    public onFetchData() {
        this.dataStorageService.getMovies();
    }
}