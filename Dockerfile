FROM public.ecr.aws/lambda/nodejs:14
RUN ["yum", "install", "-y", "https://fastdl.mongodb.org/tools/db/mongodb-database-tools-amazon2-x86_64-100.6.1.rpm"]
COPY ./package.json ${LAMBDA_TASK_ROOT}
RUN ["npm", "install"]
COPY . ${LAMBDA_TASK_ROOT}
CMD [ "app.handler" ]