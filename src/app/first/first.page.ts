import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "app-first",
    templateUrl: "./first.page.html",
    styleUrls: ["./first.page.scss"],
})
export class FirstPage implements OnInit {
    categoryId: string = null;
    categoryName: string;
    subscriber = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        // this.subscriber = this.route.queryParams.subscribe((data) => {
        //     console.error("isko bhi dekho", data);
        //     this.updateCategories(data);
        // });
    }

    ionViewWillEnter() {
        console.log("view will enter");
        this.subscriber = this.route.queryParams.subscribe((data) => {
            console.log('from subscriber', data);
            this.updateCategories(data);
        });
    }

    updateCategories(data) {
        this.categoryId = data.id;
        this.categoryName = data.category;
    }

    switchCategories(category, categoryId) {
        this.router.navigate([], {queryParams: {category: category, id: categoryId}}).then(data => {
            console.log("router navigate success", data);
        }).catch(err => {
            console.log("router navigate fail", err);
        });

    }

    pageOne() {
        this.router.navigateByUrl("/home");
    }

    pageThree() {
        this.router.navigateByUrl("/third");
    }
}
