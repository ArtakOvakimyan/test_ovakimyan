import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchProvider } from "./context/SearchProvider";
import { Provider } from 'react-redux'
import { store } from "./store/store";
import "normalize.css";
import "./index.css";

const rootNode = document.getElementById('root');

if (!rootNode) {
    throw new Error('root not found');
}
const root = createRoot(rootNode);
const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SearchProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </SearchProvider>
        </Provider>
    </React.StrictMode>
);