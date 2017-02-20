import { FormBuilder, Validators } from '@angular/forms';
import { BasicValidators } from '../../shared/basic-validators';

let Controls = [],
formBuilder = new FormBuilder();
Controls[0] = formBuilder.group({
    cpf_number: [null,
    Validators.compose([
        Validators.required,
        BasicValidators.cpf
    ])
    ],
    name: [
    null,
    Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
    ])
    ],
    rg_number: [null, Validators.required],
    birth_date: ['',
    Validators.compose([
        Validators.required,
        BasicValidators.date
    ])
    ],
    gender: [null, [Validators.required]],
    origin_id: [null,Validators.required],
    ethnicity_id: [null,[Validators.required]],
    disability_id: [null]
})
Controls[1] = formBuilder.group({
    start_year: [null, [Validators.required]],
    start_month: [null, [Validators.required]],
    end_month: [null, [Validators.required]],
    course_id: [null, [Validators.required]],
    regional: [null, [Validators.required]],
    unit_id: [null, [Validators.required]],
    modality_id: [null, [Validators.required]],
    area_id: [null, [Validators.required]],
    occupation_id: [null, [Validators.required]],
    class: [null, [
      Validators.required,
      Validators.maxLength(10)
    ]],
    distance_education: [null],
    regimental_gratuity: [null],
    agreement: [null],
    agreement_name: [null],
    pronatec_id : [null]
});

Controls[2] = formBuilder.group({
    address: [null, [Validators.required]],
    address_number: [null, [Validators.required]],
    address_complement: [null, [
      Validators.minLength(3),
      Validators.maxLength(50)
    ]],
    address_district: [null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50)
    ]],
    address_zip_code: [null, [
     BasicValidators.zip
    ]],
    city_id: [null, [Validators.required]],
    home_phone: [null, [
      BasicValidators.phone
    ]],
    cell_phone: [null, [
      BasicValidators.cell_phone
    ]],
    alternative_phone: [null, [
      BasicValidators.cell_phone
    ]],
    email: [null, [
      BasicValidators.email,
      Validators.minLength(6),
      Validators.maxLength(100)
    ]]
});
export { Controls }