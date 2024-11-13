import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-book',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ai-book.component.html',
  styleUrl: './ai-book.component.css'
})
export class AiBookComponent {

  query: string = '';    // Stores user input
  summary: string = '';  // Stores the returned summary

  async searchSummary() {
    try {
      const response = await fetch('http://127.0.0.1:8000/retrieve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: this.query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Assuming the summary is the first item in the contexts array
      this.summary = data.contexts[0][0];
    } catch (error) {
      console.error('Error fetching summary:', error);
      this.summary = 'An error occurred while fetching the summary.';
    }
  }
}
