import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../core/services/category/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public authForm!: FormGroup;
  public categories: Category[] = [];
  
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private categoryService: CategoryService,
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCategories();
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
