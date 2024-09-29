import {
  SERVICE_CREATE,
  SERVICE_DELETE,
  SERVICE_LOAD,
  SERVICE_UPDATE,
} from "../types";

const initialState = {
  service: [],
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_CREATE:
      return {
        ...state,
        service: [...state.service, action.data],
      };

    case SERVICE_UPDATE:
      const { data } = action;
      const { service } = state;
      const itemIndex = service.findIndex((res) => res.id === data.id);

      const upService = [
        ...service.slice(0, itemIndex),
        data,
        ...service.slice(itemIndex + 1),
      ];
      console.log("upService", upService);

      return {
        ...state,
        service: upService,
      };

    case SERVICE_DELETE:
      return (() => {
        const { id } = action;
        const { service } = state;
        const itemIndex = service.findIndex((res) => res.id === id);

        const delService = [
          ...service.slice(0, itemIndex),
          ...service.slice(itemIndex + 1),
        ];

        return {
          ...state,
          service: delService,
        };
      })();

    case SERVICE_LOAD:
      const serviceNew = action.data.map((res) => {
        return {
          id: res.id,
          name: res.name,
          size: res.size,
          price: res.price,
        };
      });
      return {
        ...state,
        service: serviceNew,
      };

    default:
      return state;
  }
};
