/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
      id
      classes {
        items {
          id
          name
          start
          end
          type
          age
          maxSpots
          openSpots
          classOpen
          message
          instructor
          createdAt
          updatedAt
          dayClassesId
        }
        nextToken
      }
      date
      open
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
      id
      classes {
        items {
          id
          name
          start
          end
          type
          age
          maxSpots
          openSpots
          classOpen
          message
          instructor
          createdAt
          updatedAt
          dayClassesId
        }
        nextToken
      }
      date
      open
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
      id
      classes {
        items {
          id
          name
          start
          end
          type
          age
          maxSpots
          openSpots
          classOpen
          message
          instructor
          createdAt
          updatedAt
          dayClassesId
        }
        nextToken
      }
      date
      open
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
      id
      name
      start
      end
      type
      age
      maxSpots
      openSpots
      classOpen
      day {
        id
        classes {
          nextToken
        }
        date
        open
        createdAt
        updatedAt
      }
      attendees {
        items {
          id
          username
          firstName
          lastName
          jjbelt
          llbelt
          createdAt
          updatedAt
          classAttendeesId
        }
        nextToken
      }
      message
      instructor
      createdAt
      updatedAt
      dayClassesId
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
      id
      name
      start
      end
      type
      age
      maxSpots
      openSpots
      classOpen
      day {
        id
        classes {
          nextToken
        }
        date
        open
        createdAt
        updatedAt
      }
      attendees {
        items {
          id
          username
          firstName
          lastName
          jjbelt
          llbelt
          createdAt
          updatedAt
          classAttendeesId
        }
        nextToken
      }
      message
      instructor
      createdAt
      updatedAt
      dayClassesId
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
      id
      name
      start
      end
      type
      age
      maxSpots
      openSpots
      classOpen
      day {
        id
        classes {
          nextToken
        }
        date
        open
        createdAt
        updatedAt
      }
      attendees {
        items {
          id
          username
          firstName
          lastName
          jjbelt
          llbelt
          createdAt
          updatedAt
          classAttendeesId
        }
        nextToken
      }
      message
      instructor
      createdAt
      updatedAt
      dayClassesId
    }
  }
`;
export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onCreateAttendee(filter: $filter) {
      id
      class {
        id
        name
        start
        end
        type
        age
        maxSpots
        openSpots
        classOpen
        day {
          id
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
        }
        message
        instructor
        createdAt
        updatedAt
        dayClassesId
      }
      username
      firstName
      lastName
      jjbelt
      llbelt
      createdAt
      updatedAt
      classAttendeesId
    }
  }
`;
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onUpdateAttendee(filter: $filter) {
      id
      class {
        id
        name
        start
        end
        type
        age
        maxSpots
        openSpots
        classOpen
        day {
          id
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
        }
        message
        instructor
        createdAt
        updatedAt
        dayClassesId
      }
      username
      firstName
      lastName
      jjbelt
      llbelt
      createdAt
      updatedAt
      classAttendeesId
    }
  }
`;
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onDeleteAttendee(filter: $filter) {
      id
      class {
        id
        name
        start
        end
        type
        age
        maxSpots
        openSpots
        classOpen
        day {
          id
          date
          open
          createdAt
          updatedAt
        }
        attendees {
          nextToken
        }
        message
        instructor
        createdAt
        updatedAt
        dayClassesId
      }
      username
      firstName
      lastName
      jjbelt
      llbelt
      createdAt
      updatedAt
      classAttendeesId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      firstName
      lastName
      jjBelt
      llBelt
      image
      email
      phone
      enroll
      renew
      insta
      hideEmail
      hidePhone
      freeze
      freezeStart
      freezeEnd
      goal
      progress
      userMonths {
        items {
          id
          year
          month
          jj
          ll
          createdAt
          updatedAt
          userUserMonthsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      firstName
      lastName
      jjBelt
      llBelt
      image
      email
      phone
      enroll
      renew
      insta
      hideEmail
      hidePhone
      freeze
      freezeStart
      freezeEnd
      goal
      progress
      userMonths {
        items {
          id
          year
          month
          jj
          ll
          createdAt
          updatedAt
          userUserMonthsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      firstName
      lastName
      jjBelt
      llBelt
      image
      email
      phone
      enroll
      renew
      insta
      hideEmail
      hidePhone
      freeze
      freezeStart
      freezeEnd
      goal
      progress
      userMonths {
        items {
          id
          year
          month
          jj
          ll
          createdAt
          updatedAt
          userUserMonthsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserMonths = /* GraphQL */ `
  subscription OnCreateUserMonths(
    $filter: ModelSubscriptionUserMonthsFilterInput
  ) {
    onCreateUserMonths(filter: $filter) {
      id
      user {
        id
        username
        firstName
        lastName
        jjBelt
        llBelt
        image
        email
        phone
        enroll
        renew
        insta
        hideEmail
        hidePhone
        freeze
        freezeStart
        freezeEnd
        goal
        progress
        userMonths {
          nextToken
        }
        createdAt
        updatedAt
      }
      year
      month
      jj
      ll
      createdAt
      updatedAt
      userUserMonthsId
    }
  }
`;
export const onUpdateUserMonths = /* GraphQL */ `
  subscription OnUpdateUserMonths(
    $filter: ModelSubscriptionUserMonthsFilterInput
  ) {
    onUpdateUserMonths(filter: $filter) {
      id
      user {
        id
        username
        firstName
        lastName
        jjBelt
        llBelt
        image
        email
        phone
        enroll
        renew
        insta
        hideEmail
        hidePhone
        freeze
        freezeStart
        freezeEnd
        goal
        progress
        userMonths {
          nextToken
        }
        createdAt
        updatedAt
      }
      year
      month
      jj
      ll
      createdAt
      updatedAt
      userUserMonthsId
    }
  }
`;
export const onDeleteUserMonths = /* GraphQL */ `
  subscription OnDeleteUserMonths(
    $filter: ModelSubscriptionUserMonthsFilterInput
  ) {
    onDeleteUserMonths(filter: $filter) {
      id
      user {
        id
        username
        firstName
        lastName
        jjBelt
        llBelt
        image
        email
        phone
        enroll
        renew
        insta
        hideEmail
        hidePhone
        freeze
        freezeStart
        freezeEnd
        goal
        progress
        userMonths {
          nextToken
        }
        createdAt
        updatedAt
      }
      year
      month
      jj
      ll
      createdAt
      updatedAt
      userUserMonthsId
    }
  }
`;
