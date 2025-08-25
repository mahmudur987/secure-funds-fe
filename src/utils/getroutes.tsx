import type { RouteItem } from "@/types/route.type";

const getRoutes = (data: RouteItem[]) => {
  return data.map((item) => {
    return {
      path: item.url,
      element: item.element,
    };
  });
};

export default getRoutes;
