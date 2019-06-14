import { Component } from "@angular/core";
import { PageDataServiceService } from 'src/app/services/page-data-service.service';

@Component ({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css' , './header-search.css']
})
export class HeaderComponent{
    private _isMenuOpen = false;

    tituloDaPagina = 'CMail';

    constructor(private pageService: PageDataServiceService){
        
    }

    get isMenuOpen(){
        return this._isMenuOpen
    }

    toggleMenu(){
        this._isMenuOpen = !this._isMenuOpen
    }
}