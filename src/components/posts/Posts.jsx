import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, updateTitle } from "../../redux/posts/postActions";
import Table from "react-bootstrap/Table";
import EditPost from "../../modal/EditPost";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
const Posts = () => {
  const [searchText, setSerachText] = useState("");
  const [editableTitle, setEditableTitle] = useState("");
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const handleClose = () => setShow(false);
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const editHandler = (id) => {
    const index = posts.posts.findIndex((post) => post.id == id);
    setEditIndex(index);
    const locPosts = [...posts.posts];
    setEditableTitle(locPosts[index].title);
    setShow(true);
  };
  const changeTitleHandler = (e) => {
    setEditableTitle(e.target.value);
  };
  const updateTitleHandler = () => {
    const locPosts = [...posts.posts];
    locPosts[editIndex].title = editableTitle;
    dispatch(updateTitle(locPosts));
    setShow(false);
    setSerachText("");
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.title}
        </span>
      </>
    );
  };
  const handleOnSelect = (string) => {
    setSerachText(string.title);
  };
  const clearHandler = () => {
    setSerachText("");
  };
  const searchHanlder = (string) => {
    setSerachText(string);
  };
  return (
    <>
      <EditPost
        status={show}
        handleClose={handleClose}
        titleValue={editableTitle}
        changeTitleHandler={changeTitleHandler}
        updateTitleHandler={updateTitleHandler}
      />
      <div className="mb-3">
        <ReactSearchAutocomplete
          items={posts.posts}
          fuseOptions={{ keys: ["title"] }}
          onSelect={handleOnSelect}
          resultStringKeyName="title"
          inputSearchString={searchText}
          onSearch={searchHanlder}
          onClear={clearHandler}
          formatResult={formatResult}
        />
      </div>
      {posts.isLoading ? (
        "...Loading"
      ) : (
       <div style={{height: "400px", overflowY: "auto"}}>
         <Table bordered hover>
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th>Title</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.posts
              .filter((post) => post.title.includes(searchText))
              .map((post) => {
                return (
                  <tr key={post.id}>
                    <td className="text-center">{post.id}</td>
                    <td>{post.title}</td>
                    <td className="text-center">
                      <i
                        className="fa fa-edit text-info"
                        onClick={() => editHandler(post.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
       </div>
      )}
    </>
  );
};
export default Posts;