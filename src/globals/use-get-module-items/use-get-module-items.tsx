import { useCallback, useMemo } from "react";
import { PageExport } from "./types";
import { Route } from "react-router-dom";
import { useMenu } from "../menu";

export const useGetModuleItems = (modulePath: string, pages: PageExport[]) => {
  const modules = useMenu((s) => s.modules);

  const renderPage = useCallback(
    (props: { key: number; path: string; id: number }) => {
      const { key, path, id } = props;
      const page = pages.find(
        (currPage) => currPage.path.toLowerCase() === path.toLowerCase()
      );

      if (!page) return null;

      return (
        <Route
          key={key}
          path={page.path}
          element={<page.Component areaId={id} />}
        />
      );
    },
    [pages]
  );

  const Items = useMemo(() => {
    const moduleItems =
      modules?.find(
        (currModule) =>
          currModule.path.toLowerCase() === modulePath.toLowerCase()
      )?.items ?? [];
    return (
      <>
        {moduleItems.map((item) =>
          item.subItems && item.subItems.length
            ? item.subItems.map((subItem) =>
                renderPage({
                  key: subItem.id,
                  path: item.path + subItem.path,
                  id: subItem.id,
                })
              )
            : renderPage({
                key: item.id,
                path: item.path,
                id: item.id,
              })
        )}
      </>
    );
  }, [modules, modulePath, renderPage]);

  return { Items };
};
