
export const ROLES = {

  ADMIN: "admin",
  CUSTOMER: "customer",   

};

export const DASHBOARD_ROUTES = {

  [ROLES.ADMIN]: "/admin/dashboard",
  [ROLES.CUSTOMER]: "/home",

};

export const ROLE_LABELS = {

  [ROLES.ADMIN]: "Admin",
  [ROLES.CUSTOMER]: "Customer",
    
};
