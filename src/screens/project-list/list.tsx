import React from "react";
import { IUser } from "screens/project-list/search-panel";
interface IProject {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}
interface IList {
  list: IProject[];
  users: IUser[];
}
export const List = ({ list, users }: IList) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            {/* find还有可能返回undefined,undefined.name会报错 */}
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
