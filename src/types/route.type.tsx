/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Component } from "react";

export interface RouteItem {
  title: string;
  url: string;
  icon: any;
  element: React.ReactNode | Component;
}
