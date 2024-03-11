export type SimpleChat = {
  message: string
  id: string
  title: string
  create_time?: number
  update_time?: number
}

export type Result = {
  message: string
  id: string
  title: string
  create_time?: number
  update_time?: number
  score: number
}

export type ChatHistory = {
  title: string
  create_time: number
  update_time: number
  mapping: { [key: string]: Mapping }
  moderation_results: any[]
  current_node: string
  plugin_ids: string[] | null
  conversation_id: string
  conversation_template_id: null | string
  gizmo_id: null | string
  is_archived: boolean
  safe_urls: string[]
  id: string
}

export type Mapping = {
  id: string
  message: MappingMessage | null
  parent: null | string
  children: string[]
}

export type MappingMessage = {
  id: string
  author: Author
  create_time: number | null
  update_time: number | null
  content: MessageContent
  status: MessageStatus
  end_turn: boolean | null
  weight: number
  metadata: MessageMetadata
  recipient: Recipient
}

export type Author = {
  role: Role
  name: Recipient | null
  metadata: AuthorMetadata
}

export type AuthorMetadata = {}

export enum Recipient {
  All = 'all',
  Assistant = 'assistant',
  Browser = 'browser',
  DalleText2IM = 'dalle.text2im',
  KAYAKFlightInsights = 'KAYAK.flightInsights',
  MyfilesBrowser = 'myfiles_browser',
  PluginScholarAINetJITPluginSearchAbstracts = 'plugin_scholar_ai_net__jit_plugin.searchAbstracts',
  PluginService = 'plugin_service',
  ProAskyourpdfCOMJITPluginGetReferencesReferencesPost = 'pro_askyourpdf_com__jit_plugin.get_references_references_post',
  Python = 'python',
  ScholarAINetJITPluginSearchAbstracts = 'scholar_ai_net__jit_plugin.searchAbstracts',
  SlideMakerCreatePptxDirectlyWithContent = 'slide_maker.create_pptx_directly_with_content',
  SlideMakerCreatePptxIndirectlyWithGPT = 'slide_maker.create_pptx_indirectly_with_gpt',
  SmartSlidesGetPresentationLink = 'smart_slides.getPresentationLink',
}

export enum Role {
  Assistant = 'assistant',
  System = 'system',
  Tool = 'tool',
  User = 'user',
}

export type MessageContent = {
  content_type: ContentContentType
  parts?: Array<PartClass | string>
  language?: Language
  text?: string
  result?: string
  summary?: null | string
  assets?: any[]
  url?: string
  domain?: string
  title?: string
  name?: ContentName
}

export enum ContentContentType {
  Code = 'code',
  ExecutionOutput = 'execution_output',
  MultimodalText = 'multimodal_text',
  SystemError = 'system_error',
  TetherBrowsingDisplay = 'tether_browsing_display',
  TetherQuote = 'tether_quote',
  Text = 'text',
}

export enum Language {
  JSON = 'json',
  Unknown = 'unknown',
}

export enum ContentName {
  AceTooManyRequestsException = 'AceTooManyRequestsException',
  Exception = 'Exception',
  TimeoutError = 'TimeoutError',
  ToolError = 'tool_error',
}

export type PartClass = {
  content_type: PartContentType
  asset_pointer: string
  size_bytes: number
  width: number
  height: number
  fovea: number | null
  metadata: PartMetadata | null
}

export enum PartContentType {
  ImageAssetPointer = 'image_asset_pointer',
}

export type PartMetadata = {
  dalle: Dalle
}

export type Dalle = {
  gen_id: string
  prompt: string
  seed: number
  serialization_title: SerializationTitle
}

export enum SerializationTitle {
  DALLEGenerationMetadata = 'DALL-E generation metadata',
}

export type MessageMetadata = {
  is_visually_hidden_from_conversation?: boolean
  request_id?: string
  timestamp_?: Timestamp
  message_type?: null
  finish_details?: FinishDetails
  citations?: Citation[]
  gizmo_id?: null | string
  is_complete?: boolean
  model_slug?: ModelSlug
  parent_id?: string
  _cite_metadata?: CiteMetadata
  command?: Command
  args?: Array<string[] | number | string>
  status?: MetadataStatus
  attachments?: Attachment[]
  aggregate_result?: AggregateResult
  rebase_system_message?: boolean
  voice_mode_message?: boolean
  jit_plugin_data?: JITPluginData
  invoked_plugin?: InvokedPlugin
  filter_out_for_training?: boolean
}

export type CiteMetadata = {
  citation_format: CitationFormat
  metadata_list: MetadataListElement[]
  original_query: null
}

export type CitationFormat = {
  name: CitationFormatTypeEnum
  regex?: Regex
}

export enum CitationFormatTypeEnum {
  TetherOg = 'tether_og',
}

export enum Regex {
  DD = '【(\\d+)(?::(\\d+))?†([^†【】]*)[^【】]*?】',
}

export type MetadataListElement = {
  type: MetadataListType
  title?: string
  url?: string
  text: string
  pub_date?: Date | null
  extra?: Extra | null
  name?: string
  id?: string
  source?: Source
}

export type Extra = {
  evidence_text?: EvidenceText
  cited_message_idx: number
  search_result_idx?: number | null
}

export enum EvidenceText {
  Source = 'source',
}

export enum Source {
  MyFiles = 'my_files',
}

export enum MetadataListType {
  File = 'file',
  Webpage = 'webpage',
}

export type AggregateResult = {
  status: AggregateResultStatus
  run_id: string
  start_time: number
  update_time: number
  code: string
  end_time: number | null
  final_expression_output: null | string
  in_kernel_exception: InKernelException | null
  system_exception: null
  messages: MessageElement[]
  jupyter_messages: JupyterMessage[]
  timeout_triggered: number | null
}

export type InKernelException = {
  name: string
  traceback: string[]
  args: string[]
  notes: any[]
}

export type JupyterMessage = {
  msg_type: MsgType
  parent_header?: ParentHeader
  content?: JupyterMessageContent
  timeout?: number
}

export type JupyterMessageContent = {
  execution_state?: ExecutionState
  data?: ContentData
  name?: string
  text?: string
  traceback?: string[]
  ename?: string
  evalue?: string
}

export type ContentData = {
  'text/plain': string
  'image/vnd.openai.fileservice2.png'?: string
  'image/vnd.openai.fileservice.png'?: string
  'text/html'?: string
}

export enum ExecutionState {
  Busy = 'busy',
  Idle = 'idle',
}

export enum MsgType {
  DisplayData = 'display_data',
  Error = 'error',
  ExecuteInput = 'execute_input',
  ExecuteResult = 'execute_result',
  Status = 'status',
  Stream = 'stream',
  Timeout = '@timeout',
}

export type ParentHeader = {
  msg_id: string
  version: string
}

export type MessageElement = {
  message_type: MessageType
  time: number
  stream_name?: string
  sender: Sender
  text?: string
  image_payload?: null
  image_url?: string
  width?: number
  height?: number
  timeout_triggered?: number
}

export enum MessageType {
  Image = 'image',
  Stream = 'stream',
  TimeoutInterrupt = 'timeout_interrupt',
}

export enum Sender {
  Client = 'client',
  Server = 'server',
}

export enum AggregateResultStatus {
  Cancelled = 'cancelled',
  FailedWithInKernelException = 'failed_with_in_kernel_exception',
  Running = 'running',
  Success = 'success',
}

export type Attachment = {
  name: string
  id: string
  size?: number
  mimeType?: string
  width?: number
  height?: number
  fileTokenSize?: number
  skip_content?: boolean
  content?: string
}

export type Citation = {
  start_ix: number
  end_ix: number
  citation_format_type: CitationFormatTypeEnum
  metadata?: MetadataListElement
  invalid_reason?: string
}

export enum Command {
  Back = 'back',
  Click = 'click',
  Mclick = 'mclick',
  Msearch = 'msearch',
  OpenURL = 'open_url',
  QuoteLines = 'quote_lines',
  Scroll = 'scroll',
  Search = 'search',
}

export type FinishDetails = {
  type: FinishDetailsType
  stop_tokens?: number[]
  stop?: Stop
}

export enum Stop {
  DiffMarker = '<|diff_marker|>',
  IMEnd = '<|im_end|>',
}

export enum FinishDetailsType {
  Interrupted = 'interrupted',
  MaxTokens = 'max_tokens',
  Stop = 'stop',
}

export type InvokedPlugin = {
  type: string
  namespace: string
  plugin_id: string
  http_response_status: number
}

export type JITPluginData = {
  from_server?: FromServer
  from_client?: FromClient
}

export type FromClient = {
  user_action: UserAction
}

export type UserAction = {
  data: UserActionData
  target_message_id: string
}

export type UserActionData = {
  type: string
}

export type FromServer = {
  type: string
  body: Body
}

export type Body = {
  domain: string
  is_consequential: boolean
  privacy_policy: string
  method?: string
  path: string
  operation?: string
  params: Params
  actions: Action[]
}

export type Action = {
  name?: string
  type: string
  allow?: Allow
  always_allow?: AlwaysAllow
  deny?: Allow
  oauth_redirect?: OauthRedirect
}

export type Allow = {
  target_message_id: string
}

export type AlwaysAllow = {
  target_message_id: string
  operation_hash: string
}

export type OauthRedirect = {
  gizmo_id: string
  gizmo_action_id: string
  domain: string
  target_message_id: string
}

export type Params = {
  limit?: number
  keyword_combinations?: string[]
  source_filter?: SourceFilter
  keywords?: string
  query?: string
  peer_reviewed_only?: string
  num_results_to_show?: string
  generative_mode?: string
  sort?: string
}

export type SourceFilter = {
  citation_format: string
  year_from: number
  year_to: number
  min_citations: number
  include_keywords: any[]
  exclude_keywords: any[]
}

export enum ModelSlug {
  GPT4 = 'gpt-4',
  GPT4Gizmo = 'gpt-4-gizmo',
  GPT4Plugins = 'gpt-4-plugins',
  TextDavinci002RenderSHA = 'text-davinci-002-render-sha',
}

export enum MetadataStatus {
  Failed = 'failed',
  Finished = 'finished',
}

export enum Timestamp {
  Absolute = 'absolute',
}

export enum MessageStatus {
  FinishedPartialCompletion = 'finished_partial_completion',
  FinishedSuccessfully = 'finished_successfully',
  InProgress = 'in_progress',
}
