import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import ArticleInput from 'src/app/shared/models/article-input';
import BackendErrors from 'src/app/shared/models/backend-errors';

@Component({
  selector: 'med-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: ArticleInput | null = null;
  @Input() isSubmitting: boolean = false;
  @Input() errors: BackendErrors | null = null;
  @Output() articleSubmitEvent: EventEmitter<ArticleInput> =
    new EventEmitter<ArticleInput>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    const data: ArticleInput = this.form.value;
    data.tagList = this.form.get('tagList')?.value.split(' ');
    this.articleSubmitEvent.emit(data);
  }

  private initForm() {
    if (this.initialValues) {
      this.form = this.fb.group({
        title: this.initialValues.title,
        description: this.initialValues.description,
        body: this.initialValues.body,
        tagList: this.initialValues.tagList.join(' '),
      });
    } else {
      this.form = this.fb.group({
        title: '',
        description: '',
        body: '',
        tagList: '',
      });
    }
  }
}
