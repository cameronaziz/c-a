export default `
  import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
  } from 'graphql';
  
  import * as model from '../../model';
  import * as type from '../index';
  import * as commonFields from '../commonFields';
  import { <a>taskPriorities</a> } from './taskPriority/defaults';
  
  
  export const MerchantType = new GraphQLObjectType({
    name: 'MerchantType',
    description: '...',
    fields: () => ({
      key: {
        type: GraphQLString,
        resolve: parent => parent._id,
      },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phoneNumber: { type: GraphQLString },
      url: { type: GraphQLString },
      clients: {
        type: new GraphQLList(type.ClientType),
        resolve: parent => model.Client.find({ merchantKey: parent._id }),
      },
      users: {
        type: new GraphQLList(type.UserType),
        resolve: parent => model.User.find({ merchantKey: parent._id }),
      },
      tasks: {
        type: new GraphQLList(type.TaskType),
        resolve: parent => model.Task.find({ merchantKey: parent._id }),
      },
      employees: {
        type: new GraphQLList(type.EmployeeType),
      },
      employeeClasses: {
        type: new GraphQLList(type.EmployeeClassType),
      },
      appointmentTypes: {
        type: new GraphQLList(type.AppointmentTypeType),
      },
      departments: {
        type: new GraphQLList(type.DepartmentType),
      },
      taskPriorities: {
        type: new GraphQLList(type.TaskPriorityType),
        resolve: (parent) => {
          const defaults = taskPriorities.map(obj => parent.taskPriorities.find(o => o.name === obj.name) || obj);
          return defaults.concat(parent.taskPriorities);
        },
      },
      customFields: { type: new GraphQLList(type.CustomFieldType) },
      twilioPhoneNumber: { type: GraphQLString },
      googleAccount: { type: GraphQLString },
      isActive: { type: GraphQLBoolean },
      ...commonFields.timestamps,
    }),
  });`