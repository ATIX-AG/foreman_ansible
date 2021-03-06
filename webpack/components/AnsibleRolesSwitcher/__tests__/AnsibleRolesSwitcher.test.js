import { testComponentSnapshotsWithFixtures } from 'react-redux-test-utils';

import AnsibleRolesSwitcher from '../AnsibleRolesSwitcher';

jest.mock('foremanReact/components/Pagination/PaginationWrapper');

const noop = () => {};

const fixtures = {
  'should render': {
    loading: false,
    pagination: { page: 1, perPage: 12 },
    itemCount: 20,
    addAnsibleRole: noop,
    removeAnsibleRole: noop,
    getAnsibleRoles: noop,
    changeAssignedPage: noop,
    assignedPagination: { page: 1, perPage: 12 },
    assignedRolesCount: 2,
    assignedRoles: [],
    unassignedRoles: [],
    data: {
      initialAssignedRoles: [],
    },
    error: { statusText: '', errorMsg: '' },
  },
};

describe('AnsibleRolesSwitcher', () =>
  testComponentSnapshotsWithFixtures(AnsibleRolesSwitcher, fixtures));
