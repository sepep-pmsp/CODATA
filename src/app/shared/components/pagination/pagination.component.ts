import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
    @Input() currentPage: number = 1;
    @Input() totalPages: number = 1;
    @Output() pageChange = new EventEmitter<number>();
  
    goToPage(page: number): void {
      this.pageChange.emit(page);
    }
}
