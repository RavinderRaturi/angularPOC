import { ThisReceiver } from '@angular/compiler';

export class FacebookLike {

    constructor(private initalLikes: number) {

    }

    private isLiked: boolean = false;

    getTotalLikes() {
        return this.initalLikes;
    }

    like() {
        this.initalLikes++;
        this.isLiked = true;
    }

    disLike() {
        this.initalLikes--;
        this.isLiked = false;
    }

    getLikeButtonStatus()
    {
        return this.isLiked;
    }

}

export class FacebookLikeOptmized
{
  
    constructor(public likeCounts: number, public isSelected: boolean) { }
    public  onclick() {
        this.likeCounts += (this.isSelected)? -1 : 1;
        this.isSelected = !this.isSelected;
    }
 
}


export class FacebookLikeOptmized2
{
  
    constructor(private _likeCounts: number,private _isSelected: boolean) { }
    public  onclick() {
        this._likeCounts += (this._isSelected)? -1 : 1;
        this._isSelected = !this._isSelected;
    }

    get likeCounts()
    {
        return this._likeCounts;
    }
    get isSelected()
    {return this._isSelected;}
 
}