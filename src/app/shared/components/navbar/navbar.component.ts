import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../core/services/category/category.service';
import { Category } from '../../models/category';
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public authForm!: FormGroup;
  public categories: Category[] = [];
  public user: User | null = null;
  public getUserDataSub!: Subscription;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private categoryService: CategoryService,
    private readonly userService: UserService,
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCategories();
    this.getUserData();
  }

  ngOnDestroy(): void {
    this.getUserDataSub?.unsubscribe();
  }

  public open(content: any): void {
    this.modalService.open(content);
  }

  public login(): void {
    const data: any = this.authForm.value;
    this.authService.login(data).subscribe({
      next: (data) => {
        Swal.fire({
          text: data.message,
          toast: true,
          timer: 1500,
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
        });

        this.authForm.reset();
        this.getUserData();
        this.closeModal();
      },
      error: (error) => {
        console.error('Error =>', error);
      }
    });
  }

  public closeModal(): void {
    this.modalService.dismissAll();
  }

  public getUserData(): void {
    this.getUserDataSub = this.userService.getUserData().subscribe({
      next: (response) => {
        this.user = response.data;
      },
      error: (error) => {
        throw new Error(error);
      }
    });
  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        if (response.data) {
          for (let i = 0 ; i < response.data.length ; i++) {
            const category: Category = new Category(
              response.data[i].name,
              response.data[i].subCategories,
              response.data[i].id,
            );

            this.categories.push(category);
          }
        }
      },
    });
  }
}
