import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public authForm!: FormGroup;

  constructor(
    public config: NgbModalConfig, 
    private modalService: NgbModal,
    private authService: AuthService,
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
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
}
