export interface IHRTestData {
    workWithEmployee: {
        contactsTestData: {
            addContact: {
                contactNumber: string,
                firstName: string,
                lastName: string,
                // To determine if the contact addition test case has passed
                isContactCreated: boolean
            }
        };
        employeesTestData: {
            contextMenuForEmployee: any
        };
    };
}

export let hrTestData: IHRTestData;

hrTestData = {
    workWithEmployee: {
        contactsTestData: {
            addContact: {
                contactNumber: '',
                firstName: '',
                lastName: '',
                // To determine if the contact addition test case has passed
                isContactCreated: false,
            }
        },
        employeesTestData: {
            contextMenuForEmployee: undefined
        }
    }
};