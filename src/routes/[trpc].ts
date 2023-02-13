import { createSolidAPIHandler } from "solid-start-trpc";
import { initTRPC } from "@trpc/server";
import { createTask, deleteTask, findTasks } from "~/service/Task/TaskService";
import { z } from "zod";
// import { tasksRouter } from "~/service/Tasks/TasksRouter";

const t = initTRPC.create();
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

const appRouter = createTRPCRouter({
  getTasks: publicProcedure
    .input((date: unknown) => {
      if (typeof date === "string") return date;
      throw new Error();
    })
    .query((req) => {
      return findTasks(req.input);
    }),

  createTask: publicProcedure
    .input(
      z.object({
        title: z.string(),
        details: z.string(),
        date: z.string(),
      })
    )
    .mutation((req) => {
      return createTask(req.input);
    }),

  updateTask: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        details: z.string(),
      })
    )
    .mutation((req) => {
      return createTask(req.input);
    }),

  deleteTask: publicProcedure
    .input((id: unknown) => {
      if (typeof id === "number") return id;
      throw new Error();
    })
    .mutation((req) => {
      deleteTask(req.input);
    }),
});

const handler = createSolidAPIHandler({
  router: appRouter,
  createContext: async () => null,
});

export const GET = handler;
export const POST = handler;

export type AppRouter = typeof appRouter;
