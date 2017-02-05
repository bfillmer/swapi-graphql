/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 */

import express from 'express';
import graphqlHTTP from 'express-graphql';
import swapiSchema from '../schema';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/', graphqlHTTP(() => ({
  schema: swapiSchema
})));

app.listen(9000, () => console.log(
  'GraphQL Server is now running on http://localhost:9000'
));
