import { Field, Formik } from "formik";
import React from "react";
import { FilterType } from "../../../../types/usersReducerType";

type PropsType = {
  onSearchUsers: (term: string, friend: string) => void;
  filter: FilterType;
};

export const UserSearchForm: React.FunctionComponent<PropsType> = (props) => {
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ term: props.filter.term, friend: props.filter.friend }}
        onSubmit={(values, { setSubmitting }) => {
          props.onSearchUsers(values.term, String(values.friend));
          setSubmitting(false);
        }}>
        {({ values, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field type="text" name="term" value={values.term} />
            <Field name="friend" as="select" className="my-select">
              <option value="null">All</option>
              <option value="true">Followed</option>
              <option value="false">Not followed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
