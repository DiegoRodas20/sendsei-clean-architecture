import { TestBed } from '@angular/core/testing';
import { AddContactUseCase } from '../../app/application/contacts/add-contact.usecase';
import { IContactRepository } from '../../app/domain/contacts/contact.repository';
import { Contact } from '../../app/domain/contacts/contact.model';

describe('AddContactUseCase', () => {
    let addContactUseCase: AddContactUseCase;
    let contactRepositoryMock: jasmine.SpyObj<IContactRepository>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('IContactRepository', ['addContact']);

        TestBed.configureTestingModule({
            providers: [
                AddContactUseCase,
                { provide: IContactRepository, useValue: spy }
            ]
        });

        addContactUseCase = TestBed.inject(AddContactUseCase);
        contactRepositoryMock = TestBed.inject(IContactRepository) as jasmine.SpyObj<IContactRepository>;
    });

    it('should be created', () => {
        expect(addContactUseCase).toBeTruthy();
    });

    it('should throw an error if contact age is less than or equal to minimum age', () => {
        const contact: Contact = { id: '1', userId: '1', name: 'John Doe', age: 17 };

        expect(() => addContactUseCase.execute(contact)).toThrowError('La edad minima es de 18 años');
    });

    it('should add contact if age is greater than minimum age', () => {
        const contact: Contact = { id: '1', userId: '1', name: 'John Doe', age: 19 };
        contactRepositoryMock.addContact.and.returnValue(true);

        const result = addContactUseCase.execute(contact);

        expect(result).toBeTrue();
        expect(contactRepositoryMock.addContact).toHaveBeenCalledWith(contact);
    });

    it('should return false if repository addContact method fails', () => {
        const contact: Contact = { id: '1', userId: '1', name: 'John Doe', age: 19 };
        contactRepositoryMock.addContact.and.returnValue(false);

        const result = addContactUseCase.execute(contact);

        expect(result).toBeFalse();
    });
});
