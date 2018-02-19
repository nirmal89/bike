"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component/home.component");
var gallery_component_1 = require("./gallery.component/gallery.component");
var enquiry_component_1 = require("./enquiry.component/enquiry.component");
var contact_component_1 = require("./contact.component/contact.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'gallery', component: gallery_component_1.GalleryComponent },
    { path: 'enquiry', component: enquiry_component_1.EnquiryComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRouterModule);
exports.AppRouterModule = AppRouterModule;
exports.RoutingComponents = [home_component_1.HomeComponent, gallery_component_1.GalleryComponent, enquiry_component_1.EnquiryComponent, contact_component_1.ContactComponent];
//# sourceMappingURL=app.routing.module.js.map