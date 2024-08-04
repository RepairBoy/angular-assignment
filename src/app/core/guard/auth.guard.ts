import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthServiceService)
  
  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  // return true;
};
