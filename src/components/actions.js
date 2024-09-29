import {
  SERVICE_CREATE,
  SERVICE_DELETE,
  SERVICE_LOAD,
  SERVICE_UPDATE,
  UPDATE_OFF,
  UPDATE_ON,
} from "./types";

export function updateOn() {
  return {
    type: UPDATE_ON,
  };
}

export function updateOff() {
  return {
    type: UPDATE_OFF,
  };
}

export function serviceCreate(id, name, size, price) {
  return {
    type: SERVICE_CREATE,
    data: { id, name, size, price },
  };
}

export function serviceUpdate(id, name, size, price) {
  return {
    type: SERVICE_UPDATE,
    data: { id, name, size, price },
  };
}

export function serviceDelete(id) {
  return {
    type: SERVICE_DELETE,
    id,
  };
}

export function serviceLoad(jsonData) {
  return {
    type: SERVICE_LOAD,
    data: jsonData,
  };
}
