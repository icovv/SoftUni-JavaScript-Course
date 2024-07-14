import { html} from "../../node_modules/lit-html/lit-html.js";
import { createFurniture } from "../data/api.js";

let createHtml = (err) => html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${!!err ? err.make ? `is-invalid` : `is-valid` : ``}" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${!!err ? err.model ? `is-invalid` : `is-valid` : ``}" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${!!err ? err.year ? `is-invalid` : `is-valid` : ``}" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${!!err ? err.description ? `is-invalid` : `is-valid` : ``}" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${!!err ? err.price ? `is-invalid` : `is-valid` : ``}" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${!!err ? err.img ? `is-invalid` : `is-valid` : ``}" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`
let context = null
export async function createView(ctx){
    context = ctx;
    ctx.render(createHtml());
}

async function onSubmit(e){
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let make = formData.get(`make`)
    let model = formData.get(`model`)
    let year = formData.get(`year`)
    year = Number(year);
    let description = formData.get(`description`)
    let price = formData.get(`price`)
    let material = formData.get(`material`)
    let img = formData.get(`img`);

    let err = {}
    let hasError = false;
    if (make.length < 4){
        err.make = true;
        hasError = true;
    }
    if (model.length <4){
        err.model = true;
        hasError = true;
    }
    if (year < 1950 || year > 2050){
        err.year = true;
        hasError = true;
    }
    if (description.length < 10){
        err.description = true;
        hasError = true;
    }
    if (!price || Number(price) < 0){
        err.price = true;
        hasError = true;
    }
    if (!img){
        err.img = true;
        hasError = true;
    }

    if(hasError){
        return context.render(createHtml(err));
    }
    price = Number(price);
    await createFurniture({make,model,year,description,price,img,material});
    context.goTo(`/`);
}