import { IPosisExtension } from "./IPosisExtension";
// register this function before require()ing your POSIS program bundles; they can call this at the end of their source file to register themselves
// name your processes' image names with initials preceding, like ANI/MyCoolPosisProgram (but the actual class name can be whatever you want)
// if you have several programs that are logically grouped (a "bundle") you can pretend that we have a VFS: "ANI/MyBundle/BundledProgram1"
declare function registerPosisProcess(imageName: string, constructor: any): boolean;
// For querying extension interfaces (instead of tying ourselves to "levels")
declare function queryPosisInterface<TQI extends IPosisExtension>(interfaceId: string): TQI | undefined;
