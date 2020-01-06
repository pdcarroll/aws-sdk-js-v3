import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailMessageFlowClientResolvedConfig
} from "../WorkMailMessageFlowClient";
import {
  GetRawMessageContentRequest,
  GetRawMessageContentResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetRawMessageContentCommand,
  serializeAws_restJson1_1GetRawMessageContentCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetRawMessageContentCommandInput = GetRawMessageContentRequest;
export type GetRawMessageContentCommandOutput = GetRawMessageContentResponse;

export class GetRawMessageContentCommand extends $Command<
  GetRawMessageContentCommandInput,
  GetRawMessageContentCommandOutput,
  WorkMailMessageFlowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRawMessageContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailMessageFlowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetRawMessageContentCommandInput,
    GetRawMessageContentCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRawMessageContentCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetRawMessageContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetRawMessageContentCommandOutput> {
    return deserializeAws_restJson1_1GetRawMessageContentCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
