import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListComponent } from './shoping-list.component';
import{CartService} from '../shared/cart.service';


describe('ShopingListComponent', () => {
  let component: ShopingListComponent;
  let fixture: ComponentFixture<ShopingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should use the product name from the Cart service', async(()=>{
    let ProdService=fixture.debugElement.injector.get(CartService);
    expect(ProdService.prod.name).toEqual(component.prod.name)
  }))
});
