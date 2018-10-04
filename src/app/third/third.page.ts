import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "app-third",
    templateUrl: "./third.page.html",
    styleUrls: ["./third.page.scss"],
})
export class ThirdPage implements OnInit {

    ngOnInit() {
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    pageTwo() {
        this.router.navigateByUrl("/first?category=abc&id=123");
    }

}
