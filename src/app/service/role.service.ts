import {Injectable} from '@angular/core';
import {HttpUtil} from '../util/http-util';

@Injectable()
export class RoleService {

  constructor(private httpUtil: HttpUtil) { }

  public getRoles(currentPage: number, pageSize: number) {
    const url = 'role' + '/' + currentPage + '/' + pageSize;
    return this.httpUtil.get(url);
  }

  public addRole(role: any) {
    const url = 'role';
    return this.httpUtil.post(url, role);
  }

  public updateRole(role: any) {
    const url = 'role';
    return this.httpUtil.put(url, role);
  }

  public deleteRole(roleId: number) {
    const url = 'role' + '/' + roleId;
    return this.httpUtil.delete(url);
  }

  public getApiByRoleId(roleId: number, currentPage: number, pageSize: number) {
    const url = 'role/api' + '/' + roleId + '/' + currentPage + '/' + pageSize;
    return this.httpUtil.get(url);
  }

  public getApiExtendByRoleId(roleId: number, currentPage: number, pageSize: number) {
    const url = 'role/api' + '/-/' + roleId + '/' + currentPage + '/' + pageSize;
    return this.httpUtil.get(url);
  }

  public deleteRoleAuthorityApi(roleId: number, apiId: number) {
    const url = 'role/authority/resource' + '/' + roleId + '/' + apiId;
    return this.httpUtil.delete(url);
  }

  public getMenuByRoleId(roleId: number, currentPage: number, pageSize: number) {
    const url = 'role/menu' + '/' + roleId + '/' + currentPage + '/' + pageSize;
    return this.httpUtil.get(url);
  }

  public getMenuExtendByRoleId(roleId: number, currentPage: number, pageSize: number) {
    const url = 'role/menu' + '/-/' + roleId + '/' + currentPage + '/' + pageSize;
    return this.httpUtil.get(url);
  }

  public deleteRoleAuthorityMenu(roleId: number, menuId: number) {
    const url = 'role/authority/resource' + '/' + roleId + '/' + menuId;
    return this.httpUtil.delete(url);
  }

  public getUserByRoleId(roleId: number, currentPage: number, pageSize: number) {
    const url = 'role/user' + '/' + roleId + '/' + currentPage + '/' + pageSize;
    return this.httpUtil.get(url);
  }

  public getUserExtendByRoleId(roleId: number, currentPage: number, pageSize: number) {
    const url = 'role/user' + '/-/' + roleId + '/' + currentPage + '/' + pageSize;
    return this.httpUtil.get(url);
  }

  public deleteUserAuthorityRole(uid: string, roleId: number) {
    const url = 'user/authority/role' + '/' + uid + '/' + roleId;
    return this.httpUtil.delete(url);
  }
}
