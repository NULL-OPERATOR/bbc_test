'use strict';

describe('ProgrammeDataService', function() {

  beforeEach(module('iplayerApp'));
  it('check service exists', inject(function(ProgrammeDataService) {
      expect(ProgrammeDataService).toBeDefined();
    }));
});
