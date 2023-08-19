import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Member } from "../_models/member";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MembersService } from "../_services/members.service";

@Injectable({
    providedIn: 'root'
})

export class MemberDetailedResolver implements Resolve<Member>{
    constructor(private membersService: MembersService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Member>{
        return this.membersService.getMember(route.paramMap.get('username') || "null");
    }
}