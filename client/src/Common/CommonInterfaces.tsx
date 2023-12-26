import { IGoal } from '@Interfaces/IGoal';
import {
  AutocompleteRenderOptionState,
  ButtonTypeMap,
  ExtendButtonBase,
  SelectChangeEvent,
  SvgIconProps,
  SxProps,
  TextFieldVariants,
  Theme,
} from '@mui/material';
import { QueryClient, QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { FormikProps } from 'formik';
import { CSSProperties, HTMLInputTypeAttribute, ReactElement } from 'react';
import { AxiosRequestConfig } from 'axios';
import { IDocument } from '@Interfaces/IDocument';
import { ICellEditor, ICellEditorParams, ICellRendererParams } from 'ag-grid-community';
import { IDisruption } from '@ApiService/Interfaces/IDisruption';
import { IScenario } from '@ApiService/Interfaces/IScenario';
import { IDisruptionDomain } from '@ApiService/Interfaces/IDisruptionDomain';
import { IAssignment } from '@ApiService/Interfaces/IAssignment';
import { IReality } from '@ApiService/Interfaces/IReality';
import { IJournal } from '@ApiService/Interfaces/IJournal';
import { IUser } from '@ApiService/Interfaces/IUser';
import { AnyObject, StringSchema } from 'yup';
import { AgGridReact } from 'ag-grid-react';
import { NavigateFunction } from 'react-router-dom';
import { HubConnection } from '@microsoft/signalr';
import { IState } from '@ApiService/Interfaces/IState';

// ENUMS
export enum FileStatus {
  Fail = 0,
  Success,
  Pending,
}
export enum Status {
  Active = 1,
  Frozen,
  Cancelled,
}
export enum Vitality {
  Low = 1,
  High,
  Critical,
}
export enum CityType {
  Authority = 1,
  Office,
  Other,
}

export enum RachelOrPikudiRealitiesDropDown {
  AllRealities = 1,
  LocalReality,
}
export enum ScenarioType {
  National = 1,
  Local,
}

export enum SystemState {
  Routine = 0,
  Operational,
}

export enum Importance {
  NoChange = 1,
  Important,
  Critical,
}
export enum Disruption {
  Disabling = 1,
  Heavy,
  Moderate,
  Light,
  None,
}

export enum StructuralComponent {
  None = 1,
  Low,
  Moderate,
  High,
  Full,
}
export interface IObjectProperties {
  text: string;
  value: string | number;
  calcValue?: number;
  fieldName?: string;
  colorText?: string;
  backgroundColor?: string;
  index?: number;
  icon?: string;
}
export enum Level {
  First = 1,
  Second,
  Third,
}

// React Query
export type EmptyObject = Record<string, never>;

export type FetchMethod = 'Post' | 'Patch' | 'Put' | 'Delete';

export type QueryOptions<TData> = Omit<
  UseQueryOptions<TData, unknown, TData, QueryKey>,
  'initialData' | 'queryKey'
> & {
  initialData?: () => undefined;
};
export interface IMutation<TData> {
  path: string;
  method: FetchMethod;
  data: TData;
  headers?: AxiosRequestConfig['headers'];
}
export interface IDuplicateScenarioProps {
  id: string;
  name: string;
  realityId: string;
  isRachelOrPikudiAdmin: boolean;
}
export type GapsResponses = 'majorGap' | 'mainResponse';

export interface IDisruptionsTableProps {
  rowDataDisruptionList: IDisruption[];
  setRowDataDisruptionList: (disruptions: IDisruption[]) => void;
  setLockSaveButton: (lockSaveButton: boolean) => void;
  scenario: IScenario | undefined;
}
export interface ITagsTableProps {
  activeTagsData: IDisruptionDomain[];
  setActiveTagsData: (disruptions: IDisruptionDomain[]) => void;
  rowDataTags: IDisruptionDomain[];
  setRowDataTags: (disruptions: IDisruptionDomain[]) => void;
  setLockSaveButton: ReactSetState<boolean>;
  isUpdateScenarioMode: boolean | null;
  scenario: IScenario | undefined;
}
// Accordion
export interface IAccordion {
  labelClosed?: string;
  labelOpen?: string;
  labelDefault?: string;
  summaryString?: string;
  children?: JSX.Element;
  summaryStyle?: SxProps<Theme> | undefined;
  accordionSx?: SxProps<Theme> | undefined;
  isOpenDefault?: boolean;
}
// IAccordionDetails
export interface IAccordionDetails {
  formik: FormikProps<IAssignment>;
  index: number;
  name: string[];
  disabled?: boolean;
  assignmentId: string | undefined;
  isDisabledView: boolean;
  cityType: number;
}

// Formik
export interface IOptionsFormikSelect {
  text: string;
  value: number | string;
  colorText?: string;
  backgroundColor?: string;
}
export interface IFormikSelect<TValues> {
  formik: FormikProps<TValues>;
  label: string;
  name: string;
  setEffectedFieldName?: string;
  value: number | string;
  style?: SxProps;
  styleWrap?: SxProps;
  options: IOptionsFormikSelect[];
  colorStyle?: SxProps;
  textOrValue?: boolean;
  imgLabel?: string;
  disabled?: boolean;
  setIsImgLabelClicked?: (isClicked: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onItemClicked?: (formik: FormikProps<any>, event: SelectChangeEvent<string | number>) => void;
  optionsPaddingRight?: string;
  setShowPopupStatus?: ReactSetState<string | undefined>;
}

export interface ISelectOnChangeHandler<TValues> {
  formik: FormikProps<TValues>;
  options: IOptionsFormikSelect[];
  event: SelectChangeEvent<string | number>;
  textOrValue: boolean;
  name: string;
  setEffectedFieldName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onItemClicked?: (formik: FormikProps<any>, event: SelectChangeEvent<string | number>) => void;
  setShowPopupStatus?: ReactSetState<string | undefined>;
}
export interface IFormikInput {
  name: string;
  value?: string | number;
  required?: boolean;
  variant?: TextFieldVariants;
  label?: string;
  autoFocus?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  style?: SxProps;
  styleTextArea?: CSSProperties;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  requiredTextArea?: boolean;
  disableUnderline?: boolean;
  textAlign?: CSSProperties['textAlign'];
}
export interface IMuiAutocomplete {
  options: IOptionsAutocomplete[];
  defaultValue?: IOptionsAutocomplete[] | undefined;
  renderOption?:
    | ((
        props: React.HTMLAttributes<HTMLLIElement>,
        option: IOptionsAutocomplete,
        state: AutocompleteRenderOptionState
      ) => React.ReactNode)
    | undefined;
  multiple: boolean;
  limitTags?: number | undefined;
  style?: SxProps;
  isOptionEqualToValue?:
    | ((option: IOptionsAutocomplete, value: IOptionsAutocomplete) => boolean)
    | undefined;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: IOptionsAutocomplete | IOptionsAutocomplete[] | null,
    reason?: string
  ) => void;
  renderTagsComponent?: 'chipsTagsRenderer';
  label?: string;
  disabled?: boolean;
  noOptionText?: string;
  showLabel?: boolean | undefined;
  value?: IOptionsAutocomplete[] | IOptionsAutocomplete;
  styleChip?: CSSProperties | undefined;
  initialOpen?: boolean;
}

export type ReactSetState<TState> = React.Dispatch<React.SetStateAction<TState>>;

// CreateUpdateAssignment
export interface ICreateAssignmentsArguments {
  createAssignment: (
    data: IAssignment,
    options?: UseMutationOptions<IAssignment, unknown, IMutation<IAssignment>>
  ) => Promise<IAssignment>;
  currentValues: IAssignment;
  queryClient: QueryClient;
  navigate: NavigateFunction;
  user: IUser | EmptyObject;
  defaultScenario: IScenario;
  isRachelOrPikudAdmin: boolean;
  isShowLabelRequired: boolean;
  setIsSaveButtonEnabled: ReactSetState<boolean>;
}

export type JournalAndRealityName = IJournal & {
  realityName: string;
};
export interface IAutocompleteRenderGroup {
  selectedJournals: JournalAndRealityName[];
  setSelectedJournals: ReactSetState<JournalAndRealityName[]>;
  optionsRealities: JournalAndRealityName[];
  disabled?: boolean;
  user: IUser | EmptyObject;
  assignmentId: string | undefined;
  isFixedAssignment: boolean;
  isDuplicateAssignment: boolean;
  isCopyAssignment: boolean;
  formik: FormikProps<IAssignment>;
}

// Switch.tsx
export interface ISwitch {
  toggleFn: (value: string) => void;
  routineState: string;
  operationalState: string;
  translateX?: number;
  initialState?: string;
  maskBoxHeight?: number;
  maskHeight?: number;
  boxShadow?: string;
  disableClickCallback?: boolean;
}
export interface ICalculateWidth {
  switchState: string;
  routineState: string;
  operationalState: string;
}
export interface IContainerWidth {
  windowWidth: number | undefined;
  width: number;
  switchState: string;
  routineState: string;
  translateX: number;
}

export interface IRechartsCustomTooltip {
  active?: boolean;
  payload?: {
    payload: {
      readiness: number;
      updatedAt: Date;
    };
  }[];
}

// GoalCard.tsx
export interface IGoalCard {
  goal: IGoal;
  readinessGoal?: IGoalsReadinessChart;
}

export type ColumnsSize = { [key: string]: number };

export type GoalGaps = {
  goal: IGoal;
  setIsFinishToUpdate: ReactSetState<boolean>;
};

export interface IPopupAssignmentCancelingProps {
  assignmentIntervalInMinutes: number | undefined;
}
export interface IPopupAdminSettings {
  message: string;
}
// DocumentPopUp
export type DocumentDataType = Partial<IDocument> | FormData;
export type Files = Partial<
  IDocument & {
    icon?: SvgIconProps;
  }
>[];

export interface IDocumentModal {
  showPopup: boolean;
  setShowPopup: ReactSetState<boolean>;
  setDocuments: ReactSetState<string[]>;
  files: Files;
  setFiles: ReactSetState<Files>;
  setFilesIds: ReactSetState<string[]>;
  filesIds: string[];
  isEnableEdit: boolean;
  currentScreen: CurrentScreen;
}
export type FilePathAndName = { filePath: string; fileName: string };
export interface IGetDocumentsRows {
  files: Files;
  setFiles: ReactSetState<Files>;
  setFilesIds: ReactSetState<string[]>;
  filesIds: string[];
  setFilePath: ReactSetState<FilePathAndName>;
  isEnableEdit: boolean;
}

export type AcceptedFiles = File & { createdAt?: Date };

export interface IBadge {
  countFiles: number;
  styleAttachFile?: CSSProperties;
  styleBadge?: SxProps<Theme> | undefined;
  showPopup?: boolean;
}

// Dictionaries
export interface IDictionary<T> {
  [Key: number]: T;
}
export interface IDictionaryString<T> {
  [Key: string]: T;
}

export interface IGoalAssignmentsDisplay {
  goalId: string;
  filterDisruptionDomains: string[];
  setIsReducedView: ReactSetState<boolean>;
  isReducedView: boolean;
  statusGoalAssignment: Status;
  height?: number;
}

export interface IGoalAssignments {
  disruptionLevel?: {
    text: string;
    colorText: string;
    backgroundColor: string;
  };
  documentIds?: string[];
  disruptionDescription?: string | number;
  structuralComponents?: { [key: string]: string }[];
  parentAssignmentName?: string;
}

// DisplayTags.tsx
export interface IDisplayTagsButton {
  disruptionDomains: IDisruptionDomain[];
  handleTagDeleted: (
    scenarioIndex: number,
    tags: IDisruptionDomain[],
    tagRemoved?: IDisruptionDomain
  ) => IScenario[];
  scenarioIndex: number;
}

// AdministratorScreens
export interface IAdministratorProps {
  screen: AdministratorScreens;
  setScreen: ReactSetState<AdministratorScreens>;
}

export type AdministratorScreens =
  | 'ScenariosTable'
  | 'AdministratorSettings'
  | 'OrganizationWeight'
  | 'SystemSettings';

export interface IColorSelector {
  onSave: (color: string) => void;
  color: string;
}

// DocumentPopUp.tsx
export interface IDocumentPopUp {
  setDocuments: ReactSetState<string[]>;
  documentIds: string[];
  styleBadge?: SxProps<Theme> | undefined;
  isEnableEdit: boolean;
  currentScreen: CurrentScreen;
}

export interface IFileDownload {
  fileBase64: string;
  contentType: string;
}

export interface IReadinessHistory {
  readiness: number;
  updatedAt: Date | number;
}

export interface IGoalsReadinessChart {
  readiness: number;
  readinessHistory: IReadinessHistory[];
  style?: SxProps;
}
export interface IOptionsAutocomplete {
  name: string | undefined;
  color?: string | undefined;
  value?: string | undefined;
  valueGroup?: string | undefined;
  secondValue?: number;
}
export interface IAdministratorSettings {
  scenarioId: string;
  realityIds: string[];
}
// ProtectRoute.tsx
export interface IProtectRoute {
  children: React.ReactNode;
}
// useWindowSize.tsx
export interface ISize {
  width: number | undefined;
  height: number | undefined;
}
export interface IConfirmationModalProps {
  content: React.ReactNode;
  onConfirm: () => void;
  onClose: () => void;
}
export interface IPopupDisruptionAssignmentComponent {
  disruptionsList: IDisruption[];
}
// AssignmentTableAgGrid
export type AssignmentTable = {
  filterJournals: string[];
  filterGoal: string[];
  filterStatus: string[];
  filterDisruptionDomains: IOptionsAutocomplete[];
  filterScenarios: string[];
  isTableEditable: boolean;
  setIsTableEditable: ReactSetState<boolean>;
  addAssignment: boolean;
  setAddTask: ReactSetState<boolean>;
  undoAssignment: boolean;
  setUndoAssignment: ReactSetState<boolean>;
  saveAssignment: boolean;
  setSaveAssignment: ReactSetState<boolean>;
  isExportTable: boolean;
  setIsExportTable: (value: React.SetStateAction<boolean>) => void;
  setDisableAddRow: ReactSetState<boolean>;
};

export type UtilAssignmentTable = {
  gridRef: React.RefObject<AgGridReact<RowsData>>;
  user: IUser | EmptyObject;
  isRachelAdmin: boolean;
  isPikudiAdmin: boolean;
  scenarios: IScenario[] | undefined;
  goals: IGoal[] | undefined;
  journals: IJournal[] | undefined;
  disruptionDomains: IDisruptionDomain[] | undefined;
  assignments: IAssignment[] | undefined;
  realities: IReality[] | undefined;
  assignmentTreeData: RowsData[] | undefined;
  rowsData: RowsData[];
  setRowsData: ReactSetState<RowsData[]>;
  isTableEditable: boolean;
  isFirstClick: boolean;
  setIsTableEditable: ReactSetState<boolean>;
  columnName: string;
};
export type TextByValue = ICellRendererParams<IAssignment, IState, number | string> & {
  options: IDictionary<IObjectProperties>;
};

export type ArrayData = IScenario[] | IGoal[] | IObjectProperties[];
export type SelectEditor = ICellEditorParams<RowsData, IState | string | number> & {
  arrayData: ArrayData;
  nameField?: string;
  idField?: string;
  style?: SxProps;
};

export type TextEditor = ICellEditorParams<RowsData, IState | number | string> & {
  inputType: string;
  minLength?: number;
  maxLength: number;
  multiline?: false;
  autofocus?: boolean;
  rows?: 0 | 1 | 2 | 3;
  required?: boolean;
  disableUnderline?: boolean;
  justifyContent?: string;
};

export type ValidationOptions = IDictionaryString<
  StringSchema<string | undefined, AnyObject, undefined, ''>
>;

export type DisruptionDomainsRenderer = {
  disruptionDomains: IDisruptionDomain[];
} & ICellRendererParams<RowsData, IDisruptionDomain[]>;

export type CellRenderer = {
  arrayData: Array<IScenario | IGoal | IAssignment | IJournal>;
} & ICellRendererParams<RowsData, string | number | IState>;

export type RowsData = Partial<IAssignment> & {
  parentJournalId?: number | undefined;
  dataPath?: (string | undefined)[];
  children?: RowsData[] | undefined;
  isNewRow?: boolean | undefined;
};

export type SanitizeRowForGrid =
  | (RowsData & { dataPath: (string | undefined)[] | undefined })
  | undefined;
export type SelectCellEditor = ICellEditorParams<RowsData, number> & {
  realities: IReality[];
  journals: IJournal[];
  assignments: IAssignment[];
};

export type DisruptionDomainsCellEditor = ICellEditorParams<RowsData, Array<IDisruptionDomain>> & {
  disruptionDomains: IDisruptionDomain[];
  options: IScenario[];
  isOptionEqualToValue: (option: IOptionsAutocomplete, value: IOptionsAutocomplete) => boolean;
  renderTagsComponent: 'chipsTagsRenderer';
  style: SxProps;
};

export type CellEditorInstances = ICellEditor & {
  getOptionsAssignedLevel(journalId: number, cityId: string): void;
  getChooseScenario(scenarioId: string): void;
};

export type AssignedLevelIdCellEditor = ICellEditorParams<RowsData, number> & {
  realities: IReality[];
  journals: IJournal[];
  style?: SxProps;
};

export type DataAtRoute = RowsData | undefined | { children: RowsData[] };
export interface ITreeData {
  title: string;
  value: string;
  key: string;
  children?: ITreeData[];
}

export interface IFavorites {
  isClicked?: boolean;
}

export interface IMuiAutocompleteSelectAll {
  items: IOptionsAutocomplete[];
  label: string;
  placeholder: string;
  selectAllLabel?: string;
  limitTags: number;
  onChange: ReactSetState<string[]>;
  setSelectedOptions: ReactSetState<IOptionsAutocomplete[]>;
  selectedOptions: IOptionsAutocomplete[];
  style?: SxProps;
  renderTagsComponent?: 'chipsTagsRenderer';
  initialOpen?: boolean;
}
export type TypeOrganizationWeightTable = IReality & {
  population?: number | null;
  weight?: number;
};

export interface IConnectionIdentifier {
  connection: HubConnection;
  identifier: string;
}

export type SignalrConnection = {
  hub: string;
  topic?: string;
};

export type ScenarioToTrainingEnvironment = {
  cityId: string;
  scenariosId: string[];
  isUserRachelAdmin: boolean;
  isUserPikudAdmin: boolean;
};

export type StatusType = {
  status: Status;
};

export type SystemNotifications = {
  assignments: string[];
  scenarios: string[];
  goals: string[];
};

export enum ActionNotification {
  Create = 1,
  Update,
  Delete,
}
export enum NotificationType {
  Assignment = 1,
  Scenario,
  Goal,
}
export enum CurrentScreen {
  Scenario = 'scenario',
  Goal = 'goal',
  Assignment = 'assignment',
  StructuralComponentType = 'structuralComponentType',
}
export interface INotificationPanel {
  Name: string;
  Type: NotificationType;
  CreatedOrUpdatedByUserName: string;
  GoalName?: string;
  JournalName?: string;
  ScenarioType?: ScenarioType;
  ActionType: ActionNotification;
  CreatedAt: Date;
  IsRead: boolean;
}
export interface INotificationPanelCardProps {
  message: INotificationPanel;
  handleClick?: (message: Date) => void;
}
export interface INotificationPanelCard {
  icon: string;
}
export type MouseEventHandler = () => void;

// Tooltip
export interface ISaveErrorTooltip {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isSaveBtnDisabled: (formik: FormikProps<any>) => boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
  children: ReactElement<ExtendButtonBase<ButtonTypeMap<object, 'button'>>>;
}
export interface IGetTooltipStyle {
  tooltipSx?: SxProps;
  arrowSx?: SxProps;
}
